"use client"

import Button from "@/utility/bcomponents/Button";
import Input from "@/utility/bcomponents/Input";
import { ChangeEvent, MouseEvent, useState } from "react";
import { loginObjectType } from "./pageTypes";

const inputStyle = "color-red"

export default function Login() {
    const [loginObject, setLoginObject] = useState<loginObjectType>({ username: "", password: "" })

    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => { // e.currentTarget.value
        const value: string = e.currentTarget.value
        const name: string = e.currentTarget.name
        setLoginObject((prev: loginObjectType) => {
            return { ...prev, [name]: value }
        })
    }

    const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    }

    console.log(loginObject)
    return (
        <section className="flex flex-col mx-80">
            <h1>Login</h1>
            <div
                className="flex flex-col border"
            >
                <Input
                    type={"text"}
                    placeholder="Username"
                    onChange={inputChangeHandler}
                    styleString={inputStyle}
                    name="username"
                />
                <Input
                    type={"text"}
                    placeholder="Username"
                    onChange={inputChangeHandler}
                    styleString={inputStyle}
                    name="password"
                />
                <Button
                    text="Login"
                    onClick={onClickHandler}
                />
            </div>
        </section>
    )
}