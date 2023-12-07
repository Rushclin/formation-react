import mock from "./apis/MockConfig";
import "./apis/index";

// On doit ici exporter tous les fake datas, pas tres necessaire
// export * from './fakedb/index'
mock.onAny().passThrough();
