# Isolated Installation of Coding Frameworks

Plan to install `superpowers`, `get-shit-done`, and `gstack` in a single workspace while maintaining strict isolation between them.

## Proposed Changes

### Directory Structure
Create three distinct top-level directories:
- `superpowers/`: For the [superpowers](https://github.com/obra/superpowers) framework.
- `gsd/`: For the [get-shit-done](https://github.com/gsd-build/get-shit-done) framework.
- `gstack/`: For the [gstack](https://github.com/garrytan/gstack) framework.

### Isolation Strategy
To ensure they don't interrupt each other:
1. **Local Rules**: Use individual `.github/copilot-instructions.md` files in each subdirectory (or the relevant Copilot instruction format).
2. **Local Reference Documents**: Treat skill files as reference documentation for Copilot Chat.
3. **Dedicated VS Code Workspaces**: Suggesting the user opens each folder as a separate workspace to keep Copilot context confined.

---

### [Component] superpowers
1. Create `superpowers/` directory.
2. Clone `https://github.com/obra/superpowers` into `superpowers/framework`.
3. Create a `.github/copilot-instructions.md` in `superpowers/` that directs Copilot to follow the instructions in the `framework/` folder.

### [Component] get-shit-done
1. Create `gsd/` directory.
2. Clone `https://github.com/gsd-build/get-shit-done` into `gsd/framework`.
3. Initialize the `.planning/` structure.
4. Create a `.github/copilot-instructions.md` in `gsd/` with GSD-specific rules.

### [Component] gstack
1. Create `gstack/` directory.
2. Clone `https://github.com/garrytan/gstack` into `gstack/framework`.
3. Create a `.github/copilot-instructions.md` in `gstack/` referencing the gstack personas and tools.

## Verification Plan
1. Check that `ls -R` shows isolated skill folders.
2. Verify that `CLAUDE.md` in each folder correctly points to its local context.
3. Attempt to trigger a basic command from each framework within its respective folder.
