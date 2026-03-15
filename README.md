# task-manager

A browser-based task manager built with JavaScript to practice closures, rest/default parameters, asynchronous callbacks, and Git branching.

## Features

- Add a single task with optional priority (default: 'normal')
- Add multiple tasks at once using rest parameters
- List all tasks
- Remove a task by index
- Simulate asynchronous saving with a callback (1-second delay)
- Simple HTML interface to interact with the task manager

## Concepts Demonstrated

### 1. Closures for Private State
The `createTaskManager` function defines a private array `tasks` that is only accessible through the returned methods (`addTask`, `addTasks`, `listTasks`, `removeTask`, `saveTasks`). Because these methods reference the `tasks` variable, they form a **closure**, preserving access to the array even after `createTaskManager` has finished executing. This pattern encapsulates the task list and prevents external modification.

### 2. Rest and Default Parameters
- **Default Parameters**: `addTask(task, priority = 'normal')` assigns a default value of `'normal'` to `priority` if no value or `undefined` is provided. This simplifies calls and improves flexibility.
- **Rest Parameters**: `addTasks(...items)` collects any number of arguments into an array named `items`. This allows adding multiple tasks in one call without explicitly passing an array. Rest parameters must be the last in the function signature.

### 3. Asynchronous Callbacks and the Event Loop
The `saveTasks(callback)` method simulates an asynchronous operation using `setTimeout`. After a 1-second delay, it invokes the provided callback with a copy of the current tasks array. This demonstrates:
- **Non‑blocking behavior**: `setTimeout` schedules the callback on the **task queue**. The event loop picks it up only after the call stack is empty.
- **Callback pattern**: The function that initiates the async operation receives a function to call when the operation completes.

Calling `saveTasks` multiple times shows how each callback is queued and executed in order, one per event loop tick.

### 4. Git Branching Workflow
This project was developed using feature branches to isolate changes. The main branch remains stable, while each feature (e.g., rest parameters, callbacks, UI) was built on its own branch and later merged. Key commands used:

| Command | Purpose |
|---------|---------|
| `git checkout -b <branch>` | Create and switch to a new branch |
| `git add <file>` | Stage changes |
| `git commit -m "message"` | Commit staged changes |
| `git checkout main` | Switch back to main branch |
| `git merge <branch>` | Merge a feature branch into main |
| `git branch -d <branch>` | Delete a merged branch |
| `git push origin <branch>` | Push branch to remote |
| `git log --oneline --graph` | View commit history |

## Challenges Faced

### 1. Understanding Closures
Initially, it was unclear how the inner functions could access the `tasks` array after `createTaskManager` returned. Experimenting with `console.log` and trying to access `tasks` from outside helped solidify the concept of lexical scoping and closures.

### 2. Correctly Implementing Rest Parameters
In the first attempt, `addTasks` was written with two parameters (`addingTasks, ...items`) instead of just `...items`. This caused only the first argument to be added. Reviewing the rest parameter syntax and remembering that it must be the last parameter fixed the issue.

### 3. Removing Tasks by Index
The `removeTask` method originally tried to use `tasks.remove()`, which is not a JavaScript method. Learning to use `splice(index, 1)` and handling out‑of‑bounds indices resolved this.

### 4. Simulating Asynchronous Behavior with `setTimeout`
At first, `saveTasks` was written without `setTimeout`, making it synchronous. Adding `setTimeout` and understanding why the callback executes after the current stack clears required revisiting the event loop.

### 5. Merge Conflicts
When merging the `feature-ui` branch into `main`, a conflict in `index.html` occurred because both branches had modified the same lines. Resolving it manually by choosing the correct changes (or combining them) taught how Git handles diverging histories and how to use VS Code’s conflict resolution tools.

### 6. Syntax Errors
A missing parenthesis in the event listener code caused an “Uncaught SyntaxError”. Using the browser’s console to locate the exact line number made debugging straightforward.

