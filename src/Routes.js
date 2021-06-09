import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {HomePage} from './home';
import {IngredientsPage} from './ingredients';
import {RecipesSearchPage} from './recipes';
import {ShoppingListPage} from './shopping-list';





const routes = [{
    path: '/',
    component: HomePage, 
    exact: true,

}, {
    path: '/add-ingredient',
    Component: IngredientsPage,

 }, {
    path: '/recipes',
    Component: RecipesSearchPage,

 }, {
    path: '/shopping-list',
    Component: ShoppingListPage,

 }];

export const Routes = ()=> (
<Router>
    <Switch>
    {routes.map((route, index)=> (
        <Route
            key={index}
            path={route.path}
            exact={route.exact}
            >
                <route.Component/>
            </Route>
    ))}
        
    </Switch>
</Router>
)


