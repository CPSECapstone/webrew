## How To Use Chrome Debugger in VS code

1. Install `Debugger for Chrome` extension in VS code
2. Create a `launch.json` in `.vscode` folder under the project root.

```
webrew
|-- .vscode
|   |-- launch.json
```

3. Copy the content into `launch.json`

```json
{
   "version": "0.2.0",
   "configurations": [
      {
         "name": "Chrome",
         "type": "chrome",
         "request": "launch",
         "url": "http://localhost:3000",
         "webRoot": "${workspaceFolder}/src",
         "sourceMapPathOverrides": {
            "webpack:///src/*": "${webRoot}/*"
         },
         "runtimeArgs": ["--remote-debugging-port=9229"]
      }
   ]
}
```

4. Run `npm start` to start development server.

5. Launch the debugger by hitting `F5`, or the debug icon on the side menu section and click the green `run` icon.

#### Extra

1. The approach works fine with chrome, but you might run into trouble with other browser such as `Brave Browser`.
