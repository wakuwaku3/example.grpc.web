import { CatClient } from "./proto/cat_grpc_pb";
import { credentials, Metadata, ServiceError } from "grpc";
import { GetMyCatMessage, MyCatResponse } from "./proto/cat_pb";

const address = `api:8080`;
const client = new CatClient(address, credentials.createInsecure(), {
  "grpc.keepalive_time_ms": 15 * 1000,
  "grpc.keepalive_timeout_ms": 30 * 1000,
  "grpc.keepalive_permit_without_calls": 1,
});

const req = new GetMyCatMessage();
req.setTargetCat("tama");

const metadata = new Metadata({ waitForReady: true });
metadata.add("auth", "xxx");

const exec = async () => {
  const promise = new Promise<MyCatResponse>((resolve, reject) => {
    client.getMyCat(
      req,
      metadata,
      { deadline: Date.now() + 60 * 1000 },
      (err, res) => {
        if (err) {
          console.info("failure!");
          reject(err);
          return;
        }
        console.info("success!");
        resolve(res);
      }
    );
  });

  try {
    const res = await promise;
    console.info(res);
  } catch (e) {
    const serviceError = e as ServiceError;
    if (serviceError) {
      console.error(serviceError);
      return;
    }
    const error = e as Error;
    if (error) {
      console.error(error);
      return;
    }
    console.error(e);
  }
};

exec();
setTimeout(exec, 10 * 1000);
