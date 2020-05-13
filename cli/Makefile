gen:
	rm -rf ./proto
	rm -rf ./cat.proto
	mkdir -p ./proto
	wget https://raw.githubusercontent.com/wakuwaku3/example.grpc.go.api/v0.0.1/cat.proto -O ./cat.proto
	npx grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./proto --grpc_out=./proto  --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin ./cat.proto
	npx grpc_tools_node_protoc  --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts  --ts_out=./proto  ./cat.proto
