# AGENTS.md - Guidelines for AI Coding Agents

These guidelines are crucial for ensuring the quality, maintainability, and predictability of our AI coding agents. Adherence to these principles will maximize productivity and minimize technical debt.

## 1. DRY (Don't Repeat Yourself)

*   **Single Responsibility Principle:** Each agent module should have a single, well-defined purpose.  Avoid creating overly complex modules with multiple responsibilities.
*   **Abstraction:** Utilize abstraction where appropriate to hide implementation details.  Clearly define interfaces for agents.
*   **Common Components:**  Favor reusable components and functions over repetitive code.
*   **Code Reuse:**  Design agents to incorporate existing code where feasible, minimizing duplication.

## 2. KISS (Keep It Simple, Stupid)

*   **Minimize Complexity:**  Favor straightforward logic over intricate algorithms.  Complex solutions often introduce bugs.
*   **Readability:** Code should be easily understood by other developers (and yourself in the future).  Use clear naming conventions.
*   **Concise Code:** Aim for brevity. Avoid unnecessary statements or variables.  Don't over-optimize prematurely.
*   **Focus on Core Logic:**  The primary goal of each agent module should be easily verifiable.

## 3. SOLID Principles

*   **Single Responsibility Principle (Expanded):**  Each class or module should have only one reason to change.
*   **Open/Closed Principle:**  The agent's design should be open for extension but closed for modification.  New features shouldn't require modifying existing code.
*   **Liskov Substitution Principle:**  Subclasses should be substitutable for their base classes without altering the correctness of the program.
*   **Interface Segregation Principle:**  Clients shouldn’t be forced to contain dependencies on methods they don't use.
*   **Dependency Inversion Principle:**  High-level modules should be dependent on interfaces, not specific implementations.

## 4. YAGNI (You Aren't Gonna Need It)

*   **Avoid Unnecessary Features:**  Don't implement functionality that isn’t currently required. Focus on what’s essential for the current task.
*   **Future-Proofing:** Design for potential future requirements, but prioritize current needs.
*   **Keep it Functional:**  Avoid adding "just in case" features without a clear justification.

## 5. Development Workflow

*   **Version Control (Git):** Use a branching strategy (e.g., Gitflow) with proper commit messages.
*   **Code Reviews:**  Mandatory code reviews for all changes before merging.
*   **Unit Tests:**  Develop comprehensive unit tests for each agent module.  Aim for 80% test coverage.
*   **Integration Tests:**  Implement integration tests to verify agent interaction.
*   **Static Analysis:**  Utilize static analysis tools (e.g., pylint, eslint) to identify potential issues.

## 6. Code Length & Structure

*   **Maximum Code Length:**  180 lines of code per file.
*   **Logical Structure:** Maintain a clear and consistent organization. Use comments judiciously.
*   **Modularization:** Break down large modules into smaller, manageable units.
*   **Consistent Formatting:**  Follow a consistent code style (e.g., PEP 8 for Python).

## 7. Test Coverage

*   **Test-Driven Development:**  Write tests *before* implementation.
*   **Automated Tests:**  Ensure all agents are covered by unit tests.
*   **Regression Tests:**  Implement regression tests to ensure changes don’t break existing functionality.
*   **Coverage Metrics:**  Track code coverage regularly.

## 8.  Data Handling

*   **No Mocking/Faking Implementations:**  All data and interactions must be simulated using mocks/stubs during testing.
*   **Realistic Data:**  Utilize data that accurately reflects the real-world scenarios the agent will handle.
*   **Data Validation:** Implement data validation to ensure data quality and consistency.

## 9.  Documentation

*   **API Documentation:**  Provide clear documentation for all agent functions, parameters, and return values.
*   **Example Usage:**  Include illustrative examples to demonstrate how to use agents.
*   **Code Comments:**  Provide sufficient comments to explain complex logic.

## 10.  AI-Specific Considerations

*   **Prompt Engineering:**  Ensure prompts are clear and unambiguous to guide the AI.
*   **Output Validation:**  Implement checks to validate the AI’s output against expected constraints.
*   **Error Handling:**  Provide informative error messages for AI-generated outputs.