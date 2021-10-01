import { generateUID, error } from "./utils";

const $serverNameInput = document.getElementById(
  "serverName"
)! as HTMLInputElement;
const $partyNameInput = document.getElementById(
  "partyName"
)! as HTMLInputElement;
const $tablesSelect = document.getElementById(
  "tablesSelect"
)! as HTMLSelectElement;
const $serversSelect = document.getElementById(
  "serversSelect"
)! as HTMLSelectElement;
const $createServersBtn = document.getElementById("createServer")!;
const $seatPartyBtn = document.getElementById("seatParty")!;
const $servers = document.getElementById("servers")!;
const $tables = document.getElementById("tables")!;

// Restaurant Hostess Problems
// 1. How many servers do we have today?
// 2. How many tables are there?
// 3. How many tables are available for seating?
// 4. What table/server is best for a party of 1?
// 5. What table/server is best for a party of 2?
// 6. What table/server is best for a party of 4?

// Objects/types: Restaurant, Server, Table, Party
// Actions:
// - add party to table
// - get list of available tables
// - get best next server/table

// UI NEEDED
// tables (server, party, empty)
// input & button to add server
// input & button to add party to table and server

// TYPES

// DEFAULTS

// UPDATE VIEW

// STORAGE

// OBJECTS
class Restaurant {}

const store = new Restaurant();

// EVENT HANDLERS
