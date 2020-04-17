# typescript-demo-2


### Install type script:-
 `npm install -g typescript@latest`

### command check installed typescript
`$ tsc`

`$tsc -v`

### initalize package json
`npm init -y`

### 
`$npm install --save-dev typescript@latest `

### Compile TypeScript code to javascript
`$tsc <path/to/file>.ts`
`E.g: tsc server/server.ts`
This command compile typescript code to javascript file.
`server/server.js`

### Verify javascript code in terminal
`$node server/server.js`

### .tsconfig
Defines which TypeScript files should be compiled and the location of the resulting javaScript files.

Specify the teypeScript feature use during compilation 

### Compiler option in `tsconfig.json`
- Es Interoperability
- Emitting files
- Sctric mode
- Targeting output language 

### Generate tsconfig.json
`$tsc --init`