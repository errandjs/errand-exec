# errand-exec
> [errand](https://github.com/errandjs/errand) worker component for running files in shell

## Usage

```

npm install errand-exec

```

For dependencies and suggested usage of errand worker components refer to [errand](https://github.com/errandjs/errand)

## Example

```

{
	"tasks": [

		{
			"task": "errand-logger",
			"data": {
				"description": "replace-with-task-description",
				"request": {
					"command": "echo 'hello world'"
				}
			}
		}

	]
}

```

Notes:

* **tasks** - [errand](https://github.com/errandjs/errand) task list
* **tasks[].task** - required `errand-logger` task name
* **tasks[].data.description** - optional task description
* **tasks[].data.request.command** - required command to run
