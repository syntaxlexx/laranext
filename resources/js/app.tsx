import "./bootstrap";
import "../css/app.css";
// import i18n from "i18next";
// import Cookies from "js-cookie";
// import pt from "./../../lang/pt.json";
// import mdxeditor from "./../../lang/pt/mdxeditor.json";
// import { initReactI18next } from "react-i18next";
import { createLaravextApp } from "@laravext/react";
import { resolveComponent } from "@laravext/react/tools";
// import moment from "moment/min/moment-with-locales";

document.addEventListener(
    "DOMContentLoaded",
    function () {
        createLaravextApp({
            nexusResolver: (name: string) =>
                resolveComponent(
                    `./nexus/${name}`,
                    import.meta.glob("./nexus/**/*")
                ),
            strandsResolver: (name: string) =>
                resolveComponent(
                    `./strands/${name}.jsx`,
                    import.meta.glob("./strands/**/*.jsx")
                ),

            // The beforeSetup function is executed once, before any of the setups.
            // You can use this to set something up, such as internationalization.
            beforeSetup: ({ laravext }) => {
                // const user = laravext.page_data.shared_props?.auth?.user;
                // // This is just for example purposes, using i18n/moment is not a requirement
                // i18n.use(initReactI18next).init({
                //     resources: {
                //         pt: {
                //             translation: { ...pt, ...mdxeditor },
                //         },
                //     },
                //     fallbackLng: "en",
                //     interpolation: {
                //         escapeValue: false,
                //     },
                // });
                // let locale = user?.locale ?? Cookies.get("locale") ?? "en";
                // i18n.changeLanguage(locale);
                // moment.locale(locale);
            },

            // Like Inertia, there's a wrapper for the https://ricostacruz.com/nprogress library.
            // You don't have to declare this, while using the createLaravextApp, but so
            // you know, these are the default values:
            progress: {
                delay: 0, // How many miliseconds until the loading bar appears
                color: "#29d", // The color of said bar
                includeCSS: true, // Wether or not to use NProgress' default styling
                showSpinner: false, // Wether or not to show the spinner
            },

            // or, if you don't want it at all:
            // progress: false,

            // This setup is applied to all components, including nexus and strands
            // setup: ({ component, laravext }) => {
            //     return <AnyComponentOrProvider>
            //         {component}
            //     </AnyComponentOrProvider>
            // },

            /// The setupNexus function is applied only to the nexus component, after the 'setup'
            // function, unless reverseSetupOrder is true
            // setupNexus: ({ nexus, laravext }) => {
            // return <AnyComponentOrProvider>{nexus}</AnyComponentOrProvider>;
            // },

            // The setupStrand function is applied only to the strand components, after the 'setup' function,
            // unless reverseSetupOrder is true.
            // The 'strandData' parameter is the data passed to the strand component from the blade
            // where it was located, if applicable.
            // setupStrand: ({strand, laravext, strandData}) => {
            //     return <AnyComponentOrProvider>{strand}</AnyComponentOrProvider>
            // },

            // If you want to reverse the order of the setup functions, set this to true
            // reverseSetupOrder: true,

            // If for some reason you to change the order of the file conventions, you can do so here.
            // It'll be applied to the nexus components, from a first to last basis, encapsulating
            // the page component. Check the File Conventions section for more details.
            // conventions: [
            //    'error',
            //    'layout',
            //    'middleware',
            // ],

            // If for some reason you must disable the pushState of the laravext client router, you can do
            // so here. Be aware that this will disable the back navigation, and you're user will endup
            // going back to the previous non-laravext page.
            // disablePushedStateData: () => {
            //    // Your logic here, such as detecting browsers, etc.
            //    let logicResult = true
            //    return logicResult
            // },
        });
    },
    false
);
