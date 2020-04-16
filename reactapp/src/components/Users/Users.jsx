import React from "react";
import c from "./Users.module.css";
import personImage from "../../pictures/personUser.png";

function Users(props) {
    let pages = [];
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className={c.usersContainer}>
            <div className={c.pagesContainer}>
                {pages.map((i, k) => {
                    return (
                        <button onClick={() => {
                            props.clickButton(i)
                        }} key={k} className={props.currentPage === i ? c.selected : ''}>{i}</button>
                    )
                })}
            </div>
            <div className={c.allUsersContainer}>
                {props.usersReducer.usersData.map((i, k) => {
                    return (
                        <div key={k} className={c.userItem}>
                            <div className={c.userItemImage}>
                                <div className={c.imageButton}>
                                    <img src={i.photos.small ? i.photos.small : personImage} alt="personImage"/>
                                    <div>
                                        <button className={c.button}
                                                onClick={(e) => {
                                                    e.currentTarget.innerText === 'Follow'
                                                        ? props.followFunc(false, i.id)
                                                        : props.followFunc(true, i.id)
                                                }}>{i.followed ? 'Follow' : "UnFollow"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div>User ID : {i.id}</div>
                            <div>Name : {i.name}</div>
                            <div className={c.status}>Status : {i.status}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Users;