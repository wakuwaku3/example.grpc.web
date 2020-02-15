# example.grpc.web

## usage

### execute

```sh
npm start
```

### update proto

```sh
wget https://raw.githubusercontent.com/wakuwaku3/example.grpc.go.api/v0.0.1/cat.proto -O ./proto/cat.proto && protoc --plugin='protoc-gen-ts=./node_modules/.bin/protoc-gen-ts' --js_out='import_style=commonjs,binary:./src/' --ts_out='service=grpc-web:./src/' ./proto/cat.proto
```
