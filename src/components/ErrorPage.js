import { useRouteError } from "react-router-dom"
export const ErrorPage = () =>
{
    const err = useRouteError();
    console.log(err);
    return (
    <>
    <h1>OOps! {err.status} - {err.statusText}</h1>
    <p>{err.data}</p>
    </>
    )
}