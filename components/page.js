import Clock from './clock'


export default function Page () {

    //毎秒カウントする
    useDispatch(() => {

    }, 1000)
    return (
        <>
          <Clock />
          <p>hello</p>
        </>
    )
}