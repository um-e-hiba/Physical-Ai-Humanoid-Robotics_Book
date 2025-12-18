---
sidebar_position: 2
id: 14
title: "Cognitive Planning with LLMs"
---

# Cognitive Planning with LLMs

## Executive Summary
This chapter explores the groundbreaking use of Large Language Models (LLMs) for high-level cognitive planning and reasoning in robotic systems. We investigate how LLMs, traditionally used for language tasks, can be repurposed to decompose complex, abstract human commands into a sequence of executable actions for a robot. The chapter covers essential techniques such as prompt engineering, grounding LLM outputs in the robot's physical capabilities, and creating feedback loops for error correction and replanning. The goal is to provide a framework for building more intelligent, flexible, and common-sense-driven robots.

## Learning Objectives
- Objective 1: Understand how Large Language Models (LLMs) can be applied to high-level task decomposition and plan generation in robotics.
- Objective 2: Learn key strategies for interfacing LLMs with robotic control systems, including prompt engineering and output parsing.
- Objective 3: Explore the challenges of "grounding" LLM-generated plans in the real world and ensuring safety and feasibility.
- Objective 4: Appreciate the potential of LLMs to enable robots to handle ambiguity and adapt to unforeseen circumstances through replanning.

## Conceptual Overview
While traditional robotic planners excel at finding optimal paths for well-defined tasks, they struggle with ambiguity and common-sense reasoning. For example, a command like "clean up the kitchen" is too abstract for a classical planner. Large Language Models, trained on vast amounts of text and code, possess a form of common-sense knowledge that allows them to break down such high-level goals into logical sub-tasks (e.g., 1. find sponge, 2. go to table, 3. wipe table). This chapter explores a hierarchical planning approach where an LLM acts as a high-level "cognitive planner," generating a sequence of sub-goals, which are then executed by the robot's low-level motion planners and control systems.

## Deep Technical Explanation
The integration of LLMs into a robotics stack requires careful system design to bridge the gap between abstract language and physical action. This involves prompt engineering, output parsing, grounding, and creating feedback loops.

### Prompt Engineering for Robot Tasks (H3)
The way a request is phrased to an LLM—the "prompt"—is critical to getting a useful and valid plan. Effective prompt engineering for robotics involves:
-   **Providing Context**: The prompt must include information about the robot's current state, its available actions (its "affordances"), and the state of the environment.
-   **Few-Shot Learning**: Including a few examples of valid plans in the prompt can significantly improve the structure and quality of the LLM's output.
-   **Chain-of-Thought Prompting**: Encouraging the LLM to "think step by step" by asking it to explain its reasoning can lead to more logical and coherent plans.
-   **Output Formatting**: Instructing the LLM to generate the plan in a machine-readable format, such as JSON or a numbered list of predefined functions, simplifies parsing.

#### Constraints and Safety in LLM-Generated Plans (H4)
A key challenge is ensuring that LLM-generated plans are safe and physically possible. This is a form of "grounding."
-   **Affordance Grounding**: The LLM must be given a list of the robot's specific capabilities (e.g., `pick(object)`, `goTo(location)`, `wipe(surface)`). The prompt should instruct the LLM to *only* use actions from this list.
-   **Safety Validation**: Before execution, each step of the LLM's plan must be validated against a set of safety constraints. For example, a `wipe(electrical_outlet)` command would be rejected as unsafe.
-   **Feasibility Checks**: The system must check if the preconditions for an action are met (e.g., before executing `wipe(table)`, the robot must be holding a sponge).

### LLM-Robot Interface (H3)
The interface between the LLM and the robot's control system is crucial.
-   **Parsing**: A parser module is needed to take the LLM's formatted text output and convert it into a sequence of calls to the robot's action library (e.g., ROS2 actions or services).
-   **Hierarchical Control**: The LLM generates the high-level plan (the "what"), while the robot's existing motion planning and control systems handle the low-level execution (the "how"). For example, the LLM might output `goTo(kitchen_sink)`, and the robot's navigation stack would be responsible for planning and executing the path to get there.

#### Feedback Loops and Replanning (H4)
Robots operate in dynamic environments where things can go wrong. A robust LLM-based planner needs a feedback loop.
-   **Execution Monitoring**: The system must monitor the outcome of each action.
-   **Error Detection**: If an action fails (e.g., the robot fails to grasp an object), the system must detect this failure.
-   **Replanning**: Upon failure, the system updates the LLM with the new information (e.g., "Action `pick(sponge)` failed. The sponge is not in the expected location.") and asks for a new plan. This ability to replan based on real-world feedback is a key advantage of using LLMs for cognitive planning.

## Practical Workflow
**Creating a simple LLM-based task decomposer**:
1.  **Define Robot Actions**: Create a list of simple, high-level actions your robot can perform (e.g., `['pick(obj)', 'place(obj, loc)', 'goTo(loc)']`).
2.  **Construct the Prompt**: Write a prompt that includes the list of available actions and a high-level command. For example: "You are a helpful robot assistant. Your available actions are: `['pick(obj)', 'place(obj, loc)', 'goTo(loc)']`. The user wants you to 'move the apple from the table to the counter'. Generate a numbered list of actions to achieve this."
3.  **Query an LLM API**: Send this prompt to an LLM (e.g., via the OpenAI API).
4.  **Parse the Output**: Receive the LLM's response (e.g., "1. `goTo(table)`, 2. `pick(apple)`, 3. `goTo(counter)`, 4. `place(apple, counter)`) and parse it into a list of executable commands.
5.  **Simulate Execution**: Create a simple ROS2 node that receives this list and prints out "Executing: `goTo(table)`", "Executing: `pick(apple)`", etc., simulating the execution of the plan.

## Case Studies
-   **Google's SayCan Project**: This project demonstrated how an LLM can be used to control a real mobile manipulator. The LLM provided high-level plans for complex user commands, grounded in the robot's learned skills, enabling it to perform a wide range of household tasks.
-   **Microsoft's ChatGPT for Robotics**: Researchers showed how ChatGPT could be used to write control code, reason about physics, and plan tasks for various robotic platforms, highlighting the potential of LLMs as an intuitive interface for robotics.

## Exercises
### Exercise 1: LLM Task Decomposition
Using a web-based LLM interface (like ChatGPT), provide it with a set of available robot actions (e.g., `find(object)`, `grasp(object)`, `open(drawer)`) and a high-level goal like "get the scissors from the desk drawer." Analyze the quality and logical coherence of the generated plan.
### Exercise 2: Parsing LLM Output to ROS2 Commands
Assume an LLM provides a plan as a JSON string: `[{"action": "goTo", "target": "table"}, {"action": "pick", "target": "cup"}]`. Write a Python script (non-ROS2 is fine for this exercise) that parses this JSON and prints out the corresponding ROS2-like commands, e.g., "Calling goTo service with target 'table'".
### Exercise 3: Incorporating Environmental Feedback
Design a conceptual feedback loop for an LLM-based planner. If the robot receives the command `goTo(kitchen)` but its sensors detect that the kitchen door is closed, how would you formulate the feedback to the LLM to ask for a new plan? What might the new plan look like?

## Summary
Chapter 14 introduced the exciting application of Large Language Models for cognitive planning in robotics. We learned that by leveraging an LLM's common-sense reasoning and language understanding capabilities, we can create robots that are more flexible, adaptive, and easier to command. The key to success lies in careful prompt engineering, grounding the LLM's abstract plans in the robot's physical abilities, and creating robust feedback loops for error handling and replanning. This approach represents a significant step towards creating truly intelligent and collaborative physical AI.

## Glossary
-   **Large Language Model (LLM)**: A deep learning model trained on vast amounts of text data, capable of understanding and generating human-like language for a variety of tasks, including planning.
-   **Cognitive Planning**: High-level, abstract planning that involves breaking down complex goals into a sequence of simpler, logical sub-tasks, often requiring common-sense reasoning.
-   **Prompt Engineering**: The art and science of designing effective inputs (prompts) to guide an LLM to produce a desired output.
-   **Grounding**: In robotics, the process of connecting abstract symbols, language, or plans to the physical world, including the robot's perceptions, actions, and the environment's state.
-   **Affordances**: The set of actions that a robot can perform on or with objects in its environment (e.g., a cup affords grasping, a button affords pressing).

## References
-   Ahn, M., et al. (2022). Do as I can, not as I say: Grounding language in robotic affordances. *arXiv preprint arXiv:2204.01691*.
-   Liang, J., et al. (2023). Code as policies: Language model programs for embodied control. *2023 IEEE International Conference on Robotics and Automation (ICRA)*.
-   OpenAI Blog (2020). *GPT-3: Language Models are Few-Shot Learners*.
