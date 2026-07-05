import Button from "@/utility/bcomponents/Button";
import Input from "@/utility/bcomponents/Input";
import { MouseEvent, useState } from "react";
import { loginObjectType } from "./pageTypes";

export default function Login() {
    const [loginObject, setLoginObject] = useState<loginObjectType>({ username: "", password: "" })

    const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    }
    return (
        <section>
            <h1>Login</h1>
            <div>
                <Input
                    type={"text"}
                    placeholder="Username"
                    onChange={(e) => { // e.currentTarget.value
                        setLoginObject((prev: loginObjectType) => {
                            return { ...prev, password: e.currentTarget.value }
                        })

                    }}
                />
                <Button text="Login" onClick={onClickHandler} />
            </div>
        </section>
    )
}