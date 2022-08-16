import "./style.scss";

type Props = {
    propsLabel: string;
    propsPlaceholder: String;
    propsValue: string;
    propsType: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";
};

const ContactInput = ({ props }: Props) => {
    return (
        <div className='contactInput'>
            <label className='contactInput__label' htmlFor="input-id">{propsLabel}</label>
            <input className='contactInput__input' type={propsType} id={"input-id"} placeholder={propsPlaceholder}></input>
        </div>
    )
}

export default ContactInput;