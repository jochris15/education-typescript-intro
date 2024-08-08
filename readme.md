# Typescript (basic)

## Installation
```
npm i -g typescript
```

## Init typescript project (create a tsconfig.json)
```
tsc --init
```

Note : bisa set rootDir and outDir di tsconfig.json(optional)
- rootDir = root folder untuk file kalian
- outDir = output folder untuk semua emitted file

## Compile current project 
```
tsc
```

## Ignoring tsconfig.json, compile with default compiler option (bisa multiple)
```
tsc <filename>.ts 
```