import React from "react";
import c from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItems";
import Massage from "./Massage/Massage";
import {Field, reduxForm} from "redux-form";
import {maxLength, minLength, required} from "../Validators/validators";
import {renderField} from "../Validators/FormsControls";

const maxLength15 = maxLength(15);
const minLength1 = minLength(2);

let Dialogs = (props) => {
    const myHandleSubmit = (e) => {
        props.sendMassageAC(e.newMassageTextArea);
    };
    return (
        <div className={c.dialogs}>
            <div className={c.dialogFormComponent}>
                <form onSubmit={props.handleSubmit(myHandleSubmit)}>
                    <div className={c.textAreaButton}>
                        <Field validate={[required, maxLength15, minLength1]}
                               component={renderField}
                               type="textarea"
                               name={'newMassageTextArea'}
                               cols="30"
                               rows="2"/>
                        <button>Sent Massage</button>
                    </div>
                </form>
            </div>
            <div className={c.dialogsItem}>
                {props.dialogPage.dialogsData.map((i, k) => {
                    return <DialogItem name={i.name} id={i.id} key={k}/>
                })}
            </div>
            <div className={c.massagesItem}>
                {props.dialogPage.massagesData.map((i, k) => {
                    return <Massage massage={i.massage} id={i.id} key={k}/>
                })}
            </div>
        </div>
    )
};

export default reduxForm({form: 'dialogAddMassageForm'})(Dialogs);
