import * as tfapi from "@types-first-api/core";
import * as pbjs from "protobufjs";
export interface TodoService {
    listTodos: tfapi.Endpoint<listTodosRequest, listTodosResponse>;
    createTodo: tfapi.Endpoint<createTodoRequest, createTodoResponse>;
    updateTodo: tfapi.Endpoint<updateTodoRequest, updateTodoResponse>;
    deleteTodo: tfapi.Endpoint<deleteTodoRequest, deleteTodoResponse>;
}
export interface listTodosRequest {
}
export interface listTodosResponse {
    todos?: Todo[];
}
export interface createTodoRequest {
    text?: string;
}
export interface createTodoResponse {
    todo?: Todo;
}
export interface updateTodoRequest {
    text?: string;
    completed?: boolean;
}
export interface updateTodoResponse {
    todo?: Todo;
}
export interface deleteTodoRequest {
    id?: string;
}
export interface deleteTodoResponse {
}
export interface Todo {
    id?: string;
    dateCreated?: string;
    text?: string;
    completed?: boolean;
    dateCompleted?: string;
}
export interface Services {
    "TodoService": TodoService;
}
var jsonDescriptor = JSON.parse("{\"nested\":{\"TodoService\":{\"methods\":{\"listTodos\":{\"requestType\":\"listTodosRequest\",\"responseType\":\"listTodosResponse\"},\"createTodo\":{\"requestType\":\"createTodoRequest\",\"responseType\":\"createTodoResponse\"},\"updateTodo\":{\"requestType\":\"updateTodoRequest\",\"responseType\":\"updateTodoResponse\"},\"deleteTodo\":{\"requestType\":\"deleteTodoRequest\",\"responseType\":\"deleteTodoResponse\"}}},\"listTodosRequest\":{\"fields\":{}},\"listTodosResponse\":{\"fields\":{\"todos\":{\"rule\":\"repeated\",\"type\":\"Todo\",\"id\":1}}},\"createTodoRequest\":{\"fields\":{\"text\":{\"type\":\"string\",\"id\":1}}},\"createTodoResponse\":{\"fields\":{\"todo\":{\"type\":\"Todo\",\"id\":1}}},\"updateTodoRequest\":{\"fields\":{\"text\":{\"type\":\"string\",\"id\":1},\"completed\":{\"type\":\"bool\",\"id\":2}}},\"updateTodoResponse\":{\"fields\":{\"todo\":{\"type\":\"Todo\",\"id\":1}}},\"deleteTodoRequest\":{\"fields\":{\"id\":{\"type\":\"string\",\"id\":1}}},\"deleteTodoResponse\":{\"fields\":{}},\"Todo\":{\"fields\":{\"id\":{\"type\":\"string\",\"id\":1},\"dateCreated\":{\"type\":\"string\",\"id\":2},\"text\":{\"type\":\"string\",\"id\":3},\"completed\":{\"type\":\"bool\",\"id\":4},\"dateCompleted\":{\"type\":\"string\",\"id\":5}}}}}");
var root = pbjs.Root.fromJSON(jsonDescriptor);
export var clients = tfapi.clientFactory<Services>(root);
export var services = tfapi.serviceFactory<Services>(root);
