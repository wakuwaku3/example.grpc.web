// package: 
// file: cat.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class GetMyCatMessage extends jspb.Message { 
    getTargetCat(): string;
    setTargetCat(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMyCatMessage.AsObject;
    static toObject(includeInstance: boolean, msg: GetMyCatMessage): GetMyCatMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMyCatMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMyCatMessage;
    static deserializeBinaryFromReader(message: GetMyCatMessage, reader: jspb.BinaryReader): GetMyCatMessage;
}

export namespace GetMyCatMessage {
    export type AsObject = {
        targetCat: string,
    }
}

export class MyCatResponse extends jspb.Message { 
    getName(): string;
    setName(value: string): void;

    getKind(): string;
    setKind(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MyCatResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MyCatResponse): MyCatResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MyCatResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MyCatResponse;
    static deserializeBinaryFromReader(message: MyCatResponse, reader: jspb.BinaryReader): MyCatResponse;
}

export namespace MyCatResponse {
    export type AsObject = {
        name: string,
        kind: string,
    }
}
