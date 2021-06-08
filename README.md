# Caesar Cipher cli

## Description

A program that allows you to encrypt and decrypt text using the Caesar cipher.

## How to run

1. Open terminal;
2. Clone the repo using command `git clone git@github.com:odil-abdulloyev/caesar-cipher-cli.git`;
3. Go to project folder `cd caesar-cipher-cli`;
4. Install dependencies via command `npm i`;
5. Type `node index --help` to see availlable commands and options;
6. For example, you can encode the text in the file "input.txt" with key 7 and save the result to the file "output.txt". For do that you should type command `node index --action encode --shift 7 --input input.txt --output output.txt` in your terminal;

## Options

| Option     | Alias | Argument type | Description                | Required | Usage                      |
| ---------- | ----- | ------------- | -------------------------- | -------- | -------------------------- |
| `--action` | `-a`  | string        | encrypts/decrypts the text | Yes      | `--action <encode/decode>` |
| `--shift`  | `-s`  | integer       | cipher key                 | Yes      | `--shift <key>`            |
| `--input`  | `-i`  | string        | input file name            | No       | `--input <filename>`       |
| `--output` | `-o`  | string        | output file name           | No       | `--output <filename>`      |

## Requirements

To run the program, you need to have Node js version 12 or higher installed on your computer.
