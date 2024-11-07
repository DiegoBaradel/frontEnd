import style from './CheckBox.module.css'


const CheckBox = () => {
    return (
        <>
            <div className={style.form__campo__checkBox}>
                <input type="checkbox" id='lembrar' />
                <label htmlFor="lembrar"></label>
            </div>
            <p className={style.form__opcoes__texto}>Lembrar-me</p>
        </>
    )
}

export default CheckBox