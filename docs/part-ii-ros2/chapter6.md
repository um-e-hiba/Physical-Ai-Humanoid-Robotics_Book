---
sidebar_position: 4
id: 6
title: "Launch Files and Parameter Management"
---

# Launch Files and Parameter Management

## Executive Summary
This chapter delves into ROS2 Launch files, a powerful mechanism for managing complex system startups and parameter configurations in robotic applications. It elucidates the purpose and Python-based syntax of Launch files, detailing how they orchestrate the simultaneous execution of multiple ROS2 nodes and processes. Furthermore, the chapter covers essential parameter management techniques, enabling dynamic configuration of nodes through Launch files or external YAML definitions. Learners will gain the knowledge to create, execute, and troubleshoot Launch files for robust multi-node ROS2 systems.

## Learning Objectives
- Objective 1: Understand the fundamental purpose, structure, and Python-based syntax of ROS2 Launch files.
- Objective 2: Learn how to effectively manage parameters for ROS2 nodes, including declaration, setting, and retrieval.
- Objective 3: Create and execute complex Launch files for orchestrating multi-node ROS2 applications and entire robotic systems.
- Objective 4: Utilize Launch arguments and conditionals to dynamically modify the behavior of ROS2 applications at startup.

## Conceptual Overview
As ROS2 applications grow in complexity, manually starting each node and configuring its parameters becomes cumbersome and error-prone. ROS2 Launch files provide an elegant solution by allowing developers to define a declarative startup configuration for an entire robot system. A Launch file is a Python script that describes which nodes to run, what parameters to pass, how to remap topics, and even includes other Launch files, thus enabling modular and scalable system deployment. This centralizes the system configuration, making it easier to manage, debug, and reproduce robotic behaviors.

## Deep Technical Explanation
ROS2 Launch files are Python scripts, which offers significant flexibility compared to the XML-based Launch files in ROS1. This programmatic approach allows for complex logic, conditionals, and argument parsing directly within the launch description.

### Launch File Structure (H3)
A basic ROS2 Launch file is a Python module that defines a `generate_launch_description` function. This function returns a `LaunchDescription` object, which contains a collection of launch actions that describe what needs to be executed.
-   **`LaunchDescription`**: The top-level container for all launch actions.
-   **`Node`**: The most common action, used to start a ROS2 node. It requires specifying the package name, executable name, node name, and optionally arguments, parameters, and remappings.
```python
from launch import LaunchDescription
from launch_ros.actions import Node

def generate_launch_description():
    return LaunchDescription([
        Node(
            package='my_package',
            executable='my_node',
            name='my_robot_node',
            output='screen',
            emulate_tty=True, # Recommended for seeing print output in terminal
            parameters=[
                {'my_parameter': 'value'}
            ]
        )
    ])
```

#### Common Launch Actions (H4)
Beyond `Node`, several other actions provide powerful capabilities for building modular and dynamic launch systems:
-   **`ExecuteProcess`**: For running arbitrary shell commands or non-ROS executables.
-   **`OpaqueFunction`**: Allows embedding Python functions directly within the launch description for custom logic.
-   **`IncludeLaunchDescription`**: Enables modularity by including other launch files, facilitating the composition of complex systems from smaller, reusable components.
-   **`DeclareLaunchArgument`**: Defines arguments that can be passed to the Launch file at runtime.
-   **`SetLaunchConfiguration`**: Sets a global launch configuration value.

### Parameter Management (H3)
ROS2 parameters provide a dynamic way to configure the behavior of nodes without recompiling code. Nodes declare their parameters, and these can be set during runtime or at launch.
-   **Declaration**: Nodes declare parameters in their constructor (e.g., `self.declare_parameter('my_parameter', 'default_value')` in `rclpy`).
-   **Setting/Getting**: Parameters can be set and retrieved programmatically within the node or externally via `ros2 param` command-line tools.
-   **Configuration via Launch Files**: Parameters can be passed to nodes directly within the `Node` action using the `parameters` argument, which accepts a list of dictionaries or paths to YAML files.
```python
parameters=[
    {'param_name_1': 'param_value_1'},
    '/path/to/params.yaml'
]
```

#### Parameter Types and Overriding (H4)
ROS2 supports various parameter types (integers, floats, booleans, strings, lists). Parameters can be overridden at multiple levels:
1.  **Default value in node code**.
2.  **Values specified in a Launch file** (either inline or via YAML files).
3.  **Values specified from the command line** when launching a node (e.g., `ros2 run my_package my_node --ros-args -p param_name:=value`).
This hierarchy allows for flexible configuration, with command-line arguments typically taking precedence.

## Practical Workflow
**Creating a Launch file to start multiple simple nodes, passing parameters, and using Launch arguments**:
1.  **Prepare Nodes**: Ensure you have two simple ROS2 nodes (e.g., a talker and a listener from Chapter 4) that can take a parameter (e.g., message frequency).
2.  **Create `my_launch_file.launch.py`**:
    ```python
    from launch import LaunchDescription
    from launch_ros.actions import Node
    from launch.actions import DeclareLaunchArgument
    from launch.substitutions import LaunchConfiguration

    def generate_launch_description():
        freq_arg = DeclareLaunchArgument(
            'frequency',
            default_value='1.0',
            description='Publishing frequency in Hz'
        )
        return LaunchDescription([
            freq_arg,
            Node(
                package='demo_nodes_cpp',
                executable='talker',
                name='my_talker',
                parameters=[{'frequency': LaunchConfiguration('frequency')}]
            ),
            Node(
                package='demo_nodes_cpp',
                executable='listener',
                name='my_listener'
            )
        ])
    ```
3.  **Run the Launch File**:
    ```bash
    ros2 launch my_package my_launch_file.launch.py frequency:=2.0
    ```
    This will start both `my_talker` and `my_listener`, with `my_talker` publishing at 2.0 Hz.

## Case Studies
-   **Navigation Stack Deployment**: A single Launch file can start all necessary nodes for a ROS2 navigation stack: LiDAR driver, odometry estimator, AMCL (Adaptive Monte Carlo Localization), global planner, local planner, etc., all configured with environment-specific parameters.
-   **Multi-Robot System**: For systems with multiple identical robots, a modular Launch file structure can reuse components. Each robot might have its own top-level Launch file that includes a common robot-specific Launch file, but with different namespaces or parameters.

## Exercises
### Exercise 1: Simple Multi-Node Launch File
Create a Launch file (`simple_nodes.launch.py`) that starts two instances of `demo_nodes_cpp talker`, each with a unique node name (`talker_one`, `talker_two`). Verify both are running using `ros2 node list`.

### Exercise 2: Parameter Configuration via Launch File
Modify the `demo_nodes_cpp talker` node (conceptually, or if you created it in Chapter 5) to declare a parameter `message_prefix` with a default value. Create a Launch file that starts this `talker` node and overrides `message_prefix` to "Custom Prefix: ".

### Exercise 3: Conditional Launching
Create a Launch file that takes a `use_simulator` boolean Launch argument. If `use_simulator` is true, launch `demo_nodes_cpp talker`. Otherwise, launch `demo_nodes_py listener`.

## Summary
Chapter 6 provided a deep dive into ROS2 Launch files and parameter management, demonstrating their critical role in orchestrating complex robotic systems. We explored the Python-based syntax, common actions, and various methods for configuring nodes at startup. Mastering these concepts is fundamental for deploying scalable, flexible, and robust ROS2 applications, allowing for centralized configuration and dynamic control of system behavior.

## Glossary
-   **Launch File**: A Python script in ROS2 that defines and starts a collection of ROS2 nodes and other processes, often with parameter configurations and remappings.
-   **ROS2 Parameter**: A configurable value associated with a ROS2 node that can be changed at runtime or specified at launch.
-   **Launch Argument**: A variable declared within a Launch file that can be set from the command line when the Launch file is executed, allowing for dynamic configuration.
-   **Node Action**: A type of action within a Launch file used to start a specific ROS2 node executable.
-   **DDS (Data Distribution Service)**: (Relevant from Chapter 3) The underlying middleware for ROS2 communication.

## References
- The ROS2 Documentation: [docs.ros.org](https://docs.ros.org/en/humble/Tutorials/Intermediate/Launch-system.html)
- ROS2 Parameter documentation: [docs.ros.org](https://docs.ros.org/en/humble/Concepts/Basic/About-Parameters.html)
