import { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import logoImg from '../assets/logo_elogroup.png';

type Props = {};

type State = {
  username: string,
  password: string,
  password2: string,
  successful: boolean,
  message: string
};

export default class NewUser extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);

    this.state = {
      username: "",
      password: "",
      password2: "",
      successful: false,
      message: ""
    };
  }

  validationSchema() {
    return Yup.object().shape({
      username: Yup.string()
        .test(
          "len",
          "O usuário deve ter entre 3 e 30 caracteres.",
          (val: any) =>
            val &&
            val.toString().length >= 3 &&
            val.toString().length <= 30
        )
        .required("Este campo é obrigatório!"),
      password: Yup.string()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@!?#$%^&*()/\\-])(?=.{8,})/,
          "Deve conter ao menos 8 caracteres, um maiúsculo, um minúsculo, um número e um caractere especial"
        )
        .required("Este campo é obrigatório!"),
      password2: Yup.string()
        .oneOf([
          Yup.ref('password'),
          null
        ],
          'As senhas devem ser iguais.'
        ).required("Este campo é obrigatório!"),
    });
  }

  handleRegister(userValue: { username: string; password: string }) {
    const localStorageUsers = localStorage.getItem("users");

    const users = localStorageUsers == null
      ? [userValue]
      : [...JSON.parse(localStorageUsers), userValue]

    localStorage.setItem("users", JSON.stringify(users))

    this.setState({
      message: "Cadastrado com sucesso!",
      successful: true
    });
  }

  render() {
    const { successful, message } = this.state;

    const initialValues = {
      username: "",
      password: "",
      password2: "",
    };

    return (
      <div className="col-md-12">
        <div className="card card-container">
          <img
            src={logoImg}
            alt="logo-img"
            className="logo-img-card"
          />

          <Formik
            initialValues={initialValues}
            validationSchema={this.validationSchema}
            onSubmit={this.handleRegister}
          >
            <Form>
              {!successful && (
                <div>
                  <div className="form-group">
                    <label htmlFor="username">Usuário</label>
                    <Field name="username" type="text" className="form-control" />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="alert alert-danger"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">Senha</label>
                    <Field
                      name="password"
                      type="password"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="alert alert-danger"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password2">Confirmação de Senha</label>
                    <Field
                      name="password2"
                      type="password"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="password2"
                      component="div"
                      className="alert alert-danger"
                    />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block btncard">Cadastrar</button>
                  </div>
                </div>
              )}

              {message && (
                <div className="form-group">
                  <div
                    className={
                      successful ? "alert alert-success" : "alert alert-danger"
                    }
                    role="alert"
                  >
                    {message}
                  </div>
                </div>
              )}
            </Form>
          </Formik>
        </div>
      </div>
    );
  }
}
