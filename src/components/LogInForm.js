import React from 'react';
import {View, Text} from 'react-native';
import { Input, Icon, Button } from "@rneui/themed";
import { Formik } from 'formik';
import * as Yup from 'yup'

const LogInForm = () => {
    const logInSchema = Yup.object().shape({
        email:Yup.
            string().
            email("Email no valido").
			required("Email requerido"),
        password:Yup.
                string().
                required("Contraseña requerida")
    })

  return (
    <>
        <Formik
            initialValues={{
                email:"",
                password:""
            }
        }
        onSubmit={(values, {resetForm}) => {
            console.log(values)
            resetForm();
        }}
        validationSchema={logInSchema}
        >
            {({errors, touched, values, handleChange, handleSubmit}) => {
                return(
                    <View style={{with:"100%",height:"30%",justifyContent:"space-around"}}>
                        <Input
                            placeholder="Correo"
                            leftIcon={<Icon type="material" name="mail"/>}
                            onChangeText={handleChange("email")}
                            style={{with:"100%",height:20}}
                        />
                        <Input
                            placeholder="Contraseña"
                            secureTextEntry={true}
                            leftIcon={<Icon type="material" name="lock"/>}
                            onChangeText={handleChange("password")}
                            style={{with:"100%",height:20}}
                        />
                        <Button onPress={handleSubmit} title="Submit" />
                    </View>
                )
            }}
        </Formik>    
    </>
  )
}

export default LogInForm