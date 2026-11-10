#!/usr/bin/env node

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const rootPath = path.resolve(__dirname, "../../../../");
const configPath = path.join(rootPath, "config.json");

function main() {
  const [id, name, filename, type, ...extraArgs] = process.argv.slice(2);

  if (!id || !name || !filename || !type || extraArgs.length > 0) {
    console.error(
      'Uso: node .github/skills/new-assignment/scripts/add-attachment.js <id> "<display-name>" <filename> <type>'
    );
    process.exitCode = 1;
    return;
  }

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)) {
    console.error("Erro: id deve conter letras minúsculas, números e hífens.");
    process.exitCode = 1;
    return;
  }

  if (
    filename === "." ||
    filename === ".." ||
    filename.includes("/") ||
    filename.includes("\\")
  ) {
    console.error("Erro: informe apenas o nome do arquivo, sem diretórios.");
    process.exitCode = 1;
    return;
  }

  let config;
  try {
    config = JSON.parse(fs.readFileSync(configPath, "utf8"));
  } catch (error) {
    console.error(`Erro ao ler config.json: ${error.message}`);
    process.exitCode = 1;
    return;
  }

  if (!config || !Array.isArray(config.assignments)) {
    console.error('Erro: config.json deve conter uma lista "assignments".');
    process.exitCode = 1;
    return;
  }

  const assignment = config.assignments.find((item) => item.id === id);
  if (!assignment) {
    console.error(`Erro: não existe uma assignment com o id "${id}".`);
    console.error(
      "IDs disponíveis:",
      config.assignments.map((item) => item.id).join(", ")
    );
    process.exitCode = 1;
    return;
  }

  const assignmentPath = path.join(rootPath, "assignments", id);
  const filePath = path.join(assignmentPath, filename);
  if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
    console.error(`Erro: arquivo não encontrado: assignments/${id}/${filename}.`);
    process.exitCode = 1;
    return;
  }

  if (assignment.attachments === undefined) {
    assignment.attachments = [];
  } else if (!Array.isArray(assignment.attachments)) {
    console.error(`Erro: attachments de "${id}" deve ser uma lista.`);
    process.exitCode = 1;
    return;
  }

  if (assignment.attachments.some((attachment) => attachment.file === filename)) {
    console.log(`Anexo ignorado: "${filename}" já está registrado em "${id}".`);
    return;
  }

  assignment.attachments.push({ name, file: filename, type });

  try {
    fs.writeFileSync(configPath, `${JSON.stringify(config, null, 2)}\n`);
  } catch (error) {
    console.error(`Erro ao salvar config.json: ${error.message}`);
    process.exitCode = 1;
    return;
  }

  console.log(`Anexo "${name}" (${filename}) registrado em "${id}".`);
}

main();