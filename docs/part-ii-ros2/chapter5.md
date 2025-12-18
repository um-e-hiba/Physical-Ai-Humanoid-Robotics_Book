---
sidebar_position: 3
id: 5
title: "Building ROS2 Packages with Python"
---

# Building ROS2 Packages with Python

## Executive Summary
This chapter provides a practical guide to building and managing ROS2 packages using Python. It covers the essential components of a Python-based ROS2 package, including its typical directory structure, the role of `package.xml` for metadata and dependencies, and `setup.py` for integrating Python modules and executables with the `colcon` build system. The objective is to enable learners to effectively organize, build, and deploy their ROS2 Python applications, fostering modular and maintainable robotic software.

## Learning Objectives
- Objective 1: Understand the fundamental structure and purpose of a ROS2 Python package.
- Objective 2: Learn how to create a new ROS2 Python package, add Python nodes, and configure it for building.
- Objective 3: Integrate Python-based nodes, custom message types, and services effectively within a ROS2 package.
- Objective 4: Understand the roles of `colcon`, `package.xml`, and `setup.py` in the build process for Python packages.

## Conceptual Overview
ROS2 packages serve as the primary unit for organizing software in ROS2. They encapsulate source code, build scripts, launch files, and other resources related to a specific functionality. For Python-based development, a ROS2 package is essentially a standard Python package with additional ROS2-specific configuration, primarily handled through `package.xml` and `setup.py`. The `colcon` build system then orchestrates the building and installation of these packages, ensuring all dependencies are met and executables are properly registered.

## Deep Technical Explanation
Building ROS2 packages with Python involves understanding the interplay between Python's packaging standards and ROS2's `colcon` build system. This ensures that Python modules are discoverable, and scripts can be run as ROS2 nodes.

### Package Structure (H3)
A typical ROS2 Python package follows a conventional directory layout to facilitate `colcon`'s discovery and building process.
-   **`my_package_name/`**: The root directory of your ROS2 package.
    -   **`my_package_name/`**: (Inner directory) Contains your Python source files (`.py`). This is the actual Python module that will be installed.
    -   **`resource/`**: An optional directory for non-code assets (e.g., textures, configuration files) that are packaged with the Python module.
    -   **`launch/`**: Contains ROS2 launch files (Python scripts ending in `.launch.py`).
    -   **`test/`**: Contains unit and integration tests for the package.
    -   **`msg/`, `srv/`, `action/`**: (Optional) Directories for custom message, service, and action definitions.
    -   **`package.xml`**: The manifest file describing the package.
    -   **`setup.py`**: A standard Python setup script, extended for ROS2.
    -   **`setup.cfg`**: (Optional) Configuration for `setuptools`.

#### `package.xml` Manifest (H4)
The `package.xml` file is an XML manifest that provides essential metadata about the ROS2 package. It declares the package name, version, description, maintainers, license, and crucially, its dependencies.
-   **Metadata**: `<name>`, `<version>`, `<description>`, `<maintainer>`, `<license>`.
-   **Dependencies**: `<depend>`, `<build_depend>`, `<exec_depend>`, `<test_depend>` tags specify runtime, build-time, and test-time dependencies on other ROS2 packages or system libraries. This is vital for `colcon` to resolve the build order.

### `setup.py` for Python Packages (H3)
The `setup.py` script is central to defining how a Python-based ROS2 package is built and installed. It leverages Python's `setuptools` to specify package information and crucially, how ROS2 executables are made available.
-   **`from setuptools import setup`**: Imports the necessary setup function.
-   **`package_name = 'my_package'`**: Defines the name of the Python package.
-   **`setup(...)` function**:
    -   `packages=[package_name]`: Tells `setuptools` to find and install the Python modules in the inner `my_package_name/` directory.
    -   `data_files`: Used to install non-Python files, such as `package.xml`, launch files (`.launch.py`), and custom message definitions (`.msg`, `.srv`, `.action` files).
    -   `install_requires=['setuptools']`: Declares fundamental Python dependencies.
    -   `zip_safe=True`: Typically set to `True` for Python packages that don't rely on being unzipped.
    -   `maintainer`, `maintainer_email`, `description`, `license`, `tests_require`, `entry_points`.

#### Entry Points and Executables (H4)
The `entry_points` dictionary within `setup()` is used to register Python scripts as executable ROS2 nodes. This allows them to be launched directly using `ros2 run my_package my_node_script`.
```python
entry_points={
    'console_scripts': [
        'my_node = my_package_name.my_node_module:main',
    ],
},
```
Here, `my_node` becomes the executable name, `my_package_name` is the Python module, `my_node_module` is the Python file within that module, and `main` is the function to be called when the node starts.

## Practical Workflow
**Creating a new ROS2 Python package, adding a simple publisher node, building the workspace, and running the node**:
1.  **Create a new package**: Navigate to your ROS2 workspace `src` directory and run:
    ```bash
    ros2 pkg create --build-type ament_python my_python_package
    ```
2.  **Add a simple publisher node**: Inside `my_python_package/my_python_package/`, create `publisher_node.py`:
    ```python
    import rclpy
    from rclpy.node import Node
    from std_msgs.msg import String

    class MinimalPublisher(Node):
        def __init__(self):
            super().__init__('minimal_publisher')
            self.publisher_ = self.create_publisher(String, 'topic', 10)
            timer_period = 0.5
            self.timer = self.create_timer(timer_period, self.timer_callback)
            self.i = 0

        def timer_callback(self):
            msg = String()
            msg.data = 'Hello from Python: %d' % self.i
            self.publisher_.publish(msg)
            self.get_logger().info('Publishing: "%s"' % msg.data)
            self.i += 1

    def main(args=None):
        rclpy.init(args=args)
        minimal_publisher = MinimalPublisher()
        rclpy.spin(minimal_publisher)
        minimal_publisher.destroy_node()
        rclpy.shutdown()

    if __name__ == '__main__':
        main()
    ```
3.  **Configure `setup.py`**: Modify `my_python_package/setup.py` to add the entry point for `publisher_node.py`:
    ```python
    # ... other parts of setup() ...
    entry_points={
        'console_scripts': [
            'minimal_publisher = my_python_package.publisher_node:main',
        ],
    },
    # ...
    ```
4.  **Build the workspace**: From the root of your ROS2 workspace (`~/ros2_ws`):
    ```bash
    colcon build --packages-select my_python_package
    ```
5.  **Source the workspace**:
    ```bash
    . install/setup.bash # For Linux/macOS
    ```
6.  **Run the node**:
    ```bash
    ros2 run my_python_package minimal_publisher
    ```

## Case Studies
-   **Sensor Drivers**: Many sensor drivers for ROS2 are implemented as Python packages, handling communication with hardware and publishing data to ROS2 topics. This modularity allows for easy swapping of sensor types.
-   **High-Level Control Logic**: For tasks like state machines, mission planning, or simple behavioral control, Python packages provide a rapid development environment in ROS2, leveraging Python's extensive libraries.

## Exercises
### Exercise 1: Creating a Basic Python Package
Create a new ROS2 Python package named `my_talker_listener_py`. Add two Python nodes:
1.  A `talker` node in `my_talker_listener_py/my_talker_listener_py/talker.py` that publishes `std_msgs/msg/String` messages to `/chatter`.
2.  A `listener` node in `my_talker_listener_py/my_talker_listener_py/listener.py` that subscribes to `/chatter` and prints messages.
Configure `setup.py` and `package.xml` to build and run these nodes.

### Exercise 2: Adding a Custom Message to a Package
Extend `my_talker_listener_py` package:
1.  Define a custom message `MyCustomMessage.msg` in `msg/` directory with an `int32 value` and `string description` field.
2.  Modify `talker.py` to publish `MyCustomMessage` and `listener.py` to subscribe and print it.
3.  Update `package.xml` and `setup.py` to correctly handle the custom message dependency and generation.

### Exercise 3: Package Dependencies
Given a Python ROS2 package `my_controller_pkg` that uses `rclpy` and `geometry_msgs`:
1.  Ensure `rclpy` and `geometry_msgs` are correctly declared as dependencies in `package.xml`.
2.  Add a `test_depend` for `ament_flake8` to enable code style checking during testing.

## Summary
Chapter 5 provided a practical deep dive into building ROS2 packages with Python. We covered the essential package structure, the roles of `package.xml` and `setup.py`, and how to integrate Python scripts as executable ROS2 nodes. This knowledge is crucial for developing modular, reusable, and standard-compliant robotic applications within the ROS2 ecosystem.

## Glossary
-   **colcon**: The build tool used in ROS2 to compile, link, and install packages.
-   **package.xml**: The manifest file for a ROS2 package, containing metadata and dependencies.
-   **setup.py**: A standard Python script used by `setuptools` to build and install Python packages, extended for ROS2.
-   **ROS2 Package**: The fundamental unit of software organization in ROS2, encapsulating code, build scripts, and resources.
-   **ament_python**: The build type for Python-based ROS2 packages, integrating Python packaging with `colcon`.

## References
- The ROS2 Documentation: [docs.ros.org](https://docs.ros.org/en/humble/Tutorials/Beginner-CLI-Tools/Creating-A-New-ROS2-Package.html)
- Python Packaging Authority (PyPA) documentation.
