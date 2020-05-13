// package: 
// file: cat.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as cat_pb from "./cat_pb";

interface ICatService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getMyCat: ICatService_IGetMyCat;
}

interface ICatService_IGetMyCat extends grpc.MethodDefinition<cat_pb.GetMyCatMessage, cat_pb.MyCatResponse> {
    path: string; // "/.Cat/GetMyCat"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<cat_pb.GetMyCatMessage>;
    requestDeserialize: grpc.deserialize<cat_pb.GetMyCatMessage>;
    responseSerialize: grpc.serialize<cat_pb.MyCatResponse>;
    responseDeserialize: grpc.deserialize<cat_pb.MyCatResponse>;
}

export const CatService: ICatService;

export interface ICatServer {
    getMyCat: grpc.handleUnaryCall<cat_pb.GetMyCatMessage, cat_pb.MyCatResponse>;
}

export interface ICatClient {
    getMyCat(request: cat_pb.GetMyCatMessage, callback: (error: grpc.ServiceError | null, response: cat_pb.MyCatResponse) => void): grpc.ClientUnaryCall;
    getMyCat(request: cat_pb.GetMyCatMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cat_pb.MyCatResponse) => void): grpc.ClientUnaryCall;
    getMyCat(request: cat_pb.GetMyCatMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cat_pb.MyCatResponse) => void): grpc.ClientUnaryCall;
}

export class CatClient extends grpc.Client implements ICatClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getMyCat(request: cat_pb.GetMyCatMessage, callback: (error: grpc.ServiceError | null, response: cat_pb.MyCatResponse) => void): grpc.ClientUnaryCall;
    public getMyCat(request: cat_pb.GetMyCatMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cat_pb.MyCatResponse) => void): grpc.ClientUnaryCall;
    public getMyCat(request: cat_pb.GetMyCatMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cat_pb.MyCatResponse) => void): grpc.ClientUnaryCall;
}
