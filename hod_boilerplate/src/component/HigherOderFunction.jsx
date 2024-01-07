import React from "react";

class HigherOrderFunction extends React.Component{
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ]
        }
    }
    // progression-2
    renderItems = () => {
        const data = this.state.userData;
        const mapRows = data.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    {/* Passing unique value to 'key' prop, eases the process for virtual DOM to remove the specific element and update HTML tree  */}
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
               </li>
            </React.Fragment>
        ));
        return mapRows;
    };
    // Progression -3
    renderbyUserType = () =>{
        const data = this.state.userData;
        const filteredByType = data.filter((item) => {
            return item.user_type === "Designer"
        })

    const mapRows = filteredByType.map((item) => (
        <React.Fragment key={item.id}>
            <li className="list-element">
                <span>Id: {item.id}</span>
                <span>Name: {item.name}</span>
                <span>User Type: {item.user_type}</span>
            </li>
        </React.Fragment>
    ))
    return mapRows;

    }
    // progression-4
 renderbyUserByJ = () =>{
    const data = this.state.userData;
    const filteredByTypeLetter = data.filter((item) => {
        return item.name[0] === "J"
    })

const mapRows = filteredByTypeLetter.map((item) => (
    <React.Fragment key={item.id}>
        <li className="list-element">
            <span>Id: {item.id}</span>
            <span>Name: {item.name}</span>
            <span>User Type: {item.user_type}</span>
        </li>
    </React.Fragment>
))
return mapRows;
}
// progression-5

renderDataByage = () =>{
    const data = this.state.userData;
    const filteredByage = data.filter((item) => {
        return item.age > 28 && item.age <= 50
    })

const mapRows = filteredByage.map((item) => (
    <React.Fragment key={item.id}>
        <li className="list-element">
            <span>Id: {item.id}</span>
            <span>Name: {item.name}</span>
            <span>User Type: {item.user_type}</span>
        </li>
    </React.Fragment>
))
return mapRows;
}
//Progression-6
renderTotalYearsOfTheDesigners = () => {
    const data = this.state.userData;
    const FilteredByDesigner = data.filter((item) => {
        return item.user_type === "Designer"
    })
    const mappedYears = FilteredByDesigner.map((item) => item.years);
    const totalYears = mappedYears.reduce((acc, currentValue) => acc + currentValue, 0);
    return totalYears

    }
    render(){
        return (
            <div className="parent">
                <div>
                    <h2>Display all items</h2>
                    <div className="display-box">
                        <ul>{this.renderItems()}</ul>
                    </div>
                </div>
                <div>
                    <h2>Displayed based on user type</h2>
                    <div className="display-box">
                        <ul>{this.renderbyUserType()}</ul>
                    </div>
                </div>
                <div>
                    <h2>Filtered all data starting with J</h2>
                    <div className="display-box">
                        <ul>{this.renderbyUserByJ()}</ul>
                    </div>
                </div>
                <div>
                    <h2>Filtered all data based on age greater than 28 and age lesser than equal to 50</h2>
                    <div className="display-box">
                        <ul>{this.renderDataByage()}</ul>
                    </div>
                </div>
                <div>
                    <h2>Found the total years of the designers</h2>
                    <div className="display-box">
                        <ul>{this.renderTotalYearsOfTheDesigners()}</ul>
                    </div>
                </div>
            </div>
            )
    }
}



export default HigherOrderFunction