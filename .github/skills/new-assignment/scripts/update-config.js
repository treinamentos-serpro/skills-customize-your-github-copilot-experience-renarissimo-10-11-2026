#!/usr/bin/env node

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const configPath = path.resolve(__dirname, "../../../../config.json");

function main() {
  const [id, title, description, ...extraArgs] = process.argv.slice(2);

  if (!id || !title || !description || extraArgs.length > 0) {
    console.error(
      'Uso: node .github/skills/new-assignment/scripts/update-config.js <id> "<title>" "<description>"'
    );
    process.exitCode = 1;
    return;
  }

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)) {
    console.error("Erro: id deve conter letras minúsculas, números e hífens.");
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

  if (config.assignments.some((assignment) => assignment.id === id)) {
    console.error(`Erro: já existe uma assignment com o id "${id}".`);
    process.exitCode = 1;
    return;
  }

  const dueDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];

  config.assignments.push({
    id,
    title,
    description,
    path: `assignments/${id}`,
    dueDate,
  });

  try {
    fs.writeFileSync(configPath, `${JSON.stringify(config, null, 2)}\n`);
  } catch (error) {
    console.error(`Erro ao salvar config.json: ${error.message}`);
    process.exitCode = 1;
    return;
  }

  console.log(`Assignment "${title}" (${id}) registrada em config.json.`);
}

main();