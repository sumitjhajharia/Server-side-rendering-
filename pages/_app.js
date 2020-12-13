import App from 'next/app';

console.log("First ****************** app ********************")

export default class TApp extends App {
    static getInitialProps = async (appContext) => {
        const appProps = await App.getInitialProps(appContext)
        console.log("hihi", appProps, appContext)
        // return { ...appProps }
      }

    render(){
        return(<div>HIHIHIHIHI</div>)
    }
}