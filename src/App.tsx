import * as React from "react";
import "./App.css";
import { GetMyCatMessage } from "./proto/cat_pb";
import { CatClient } from "./proto/cat_pb_service";

const apiHost = process.env.REACT_APP_API_HOST;
const apiPort = process.env.REACT_APP_API_PORT;
const api = `http://${apiHost}:${apiPort}`;

const App: React.FC = () => {
  const [name, setName] = React.useState("tama");
  const [kind, setKind] = React.useState("");
  const requestService = React.useCallback(() => {
    const request = new GetMyCatMessage();
    request.setTargetCat(name);
    const client = new CatClient(api, {});
    client.getMyCat(request, (err, ret) => {
      if (err || ret === null) {
        throw err;
      }
      setKind(ret.getKind());
    });
  }, [name]);
  requestService();
  const onChange = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const name = e.currentTarget.value;
      setName(name);
      requestService();
    },
    [requestService]
  );
  return (
    <div className="App">
      <header className="App-header">
        <select onChange={onChange} value={name}>
          <option value="tama">タマ</option>
          <option value="mike">ミケ</option>
        </select>
        <div>{kind}</div>
      </header>
    </div>
  );
};

export default App;
