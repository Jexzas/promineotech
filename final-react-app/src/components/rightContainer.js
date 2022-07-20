import { Route, Switch } from 'react-router-dom';

export default function RightContainer() {
    return (
        <Switch>
        <Route exact path="/">
            <Home /> 
        </Route>
        <Route path="/Refrigerator">
            <Area location="Refrigerator"/>
        </Route>
        <Route path="/Pantry">
            <Area location="Pantry"/>
        </Route>
        <Route path="/Freezer">
            <Area location="Freezer"/>
        </Route>
        <Route path="/FruitsBasket">
            <Area location="FruitsBasket"/>
        </Route>
        </Switch>
    )
}

function Home () {
    return (
        <h1>You have not selected an area to view.</h1>
    )
}