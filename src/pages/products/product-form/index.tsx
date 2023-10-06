import React, { useState } from "react";
import { useNavigate } from "react-router";
import { MenuItem, TextField } from "@mui/material";

import styles from "./ProductForm.module.scss";
import { ProductInterface } from "../../interfaces/product-interface";
import productService from "../product.service";

import { category, initialCreateForm } from "../options";
import Button from "../../../components/button";
import { hasEmptyFields } from "../../../shared/util";
import { AxiosError } from "axios";
import { SnackbarInterface } from "../../members/interfaces/Snackbar.interface";
import { CartToast } from "../../../components/snackbar";
import { ProductCreateInterface } from "../../interfaces/product-create-interface";
import MonetaryTextField from "../../../components/monetary-text-field";

const ProductForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<ProductCreateInterface>(initialCreateForm);
  const [snackbar, setSnackbar] = useState<SnackbarInterface>({ isOpen: false, message: "", severity: "success" });
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleOpenSnackbar = (message: string, severity: "success" | "error" | "info" | "warning") => {
    setSnackbar({ isOpen: true, message, severity });
  };

  const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar({ isOpen: false, message: "", severity: "success" });
  };

  const create = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(form);
    try {
      await productService.httpPost(form);
      handleOpenSnackbar("Produto criado com sucesso.", "success");
      navigate("/produtos");
    } catch (error: any) {
      if (error instanceof AxiosError) {
        handleOpenSnackbar(error.message, "error");
      }
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    if (name === "preco" || name === "qtdEstoqueInicial" || name === "qtdVendidaTotal") {
      setFormValue(name, Number(value));
      return;
    }

    setFormValue(name, value);
  };

  const setFormValue = (name: string, value: string | number) => {
    setForm((oldForm) => ({
      ...oldForm,
      [name]: value,
    }));
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSelectedCategory(event.target.value);
    handleInputChange(event);
  };

  const handleBalanceInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    propertyForm: "initial" | "total"
  ) => {
    let balance = 0;
    if (propertyForm === "initial") {
      balance = Number(event.target.value) - form.qtdVendidaTotal;
    } else {
      balance = form.qtdEstoqueInicial - Number(event.target.value);
    }
    setForm((oldForm) => ({
      ...oldForm,
      qtdSaldo: balance,
    }));
  };

  const handleMonetaryTextField = (v: number) => {
    setFormValue("preco", v);
  };

  return (
    <>
      <form onSubmit={create}>
        <div>
          <TextField
            label="Nome"
            variant="outlined"
            name="nome"
            onChange={(v) => handleInputChange(v)}
            value={form.nome}
          />
          <MonetaryTextField value={form.preco} onChange={handleMonetaryTextField} />
          <TextField
            label="Descrição"
            variant="outlined"
            name="descricao"
            onChange={(v) => {
              handleInputChange(v);
            }}
            value={form.descricao}
          />
          <TextField
            label="Quantidade de estoque inicial"
            variant="outlined"
            type="number"
            name="qtdEstoqueInicial"
            onChange={(v) => {
              handleInputChange(v);
              handleBalanceInput(v, "initial");
            }}
            inputProps={{
              min: Number(form["qtdVendidaTotal"]),
              max: 1000,
            }}
            value={Number(form.qtdEstoqueInicial)}
          />
          <TextField
            label="Quantidade vendida total"
            variant="outlined"
            type="number"
            name="qtdVendidaTotal"
            onChange={(v) => {
              handleInputChange(v);
              handleBalanceInput(v, "total");
            }}
            value={form.qtdVendidaTotal}
            inputProps={{
              min: 0,
              max: Number(form["qtdEstoqueInicial"]),
            }}
          />
          <TextField
            label="Quantidade saldo"
            variant="outlined"
            type="number"
            name="qtdSaldo"
            value={form.qtdSaldo}
            inputProps={{
              min: 0,
              max: form["qtdEstoqueInicial"],
              readOnly: true,
            }}
          />
          <TextField
            id="categoria"
            name="categoria"
            fullWidth
            select
            label="Categoria"
            value={selectedCategory}
            onChange={(v) => handleSelectChange(v)}
          >
            {category.map((option) => (
              <MenuItem key={option} value={option?.toString()}>
                {option}
              </MenuItem>
            ))}
          </TextField>

          <Button
            text="Criar produto"
            customStyles={{ backgroundColor: "#7b1fa2", color: "#f3e5f5", borderStyle: "none", width: "100%" }}
            disabled={hasEmptyFields(form)}
          />
        </div>
      </form>
      <CartToast
        open={snackbar.isOpen}
        message={snackbar.message}
        handleClose={handleCloseSnackbar}
        time={10000}
        severity={snackbar.severity}
      />
    </>
  );
};

export default ProductForm;
