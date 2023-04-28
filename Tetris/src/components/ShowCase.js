export default function ShowCase(props) {
    let toRight = (
        <div className="flex flex-col px-10 sm:flex-row">
            <div className="p-3 block w-400 mx-auto mb-3 md: w-7/9 sm:p-8">
                <div className="text-sky-500 font-semibold text-5xl md:text-6xl">{props.title}</div>
                <div className="text-white p-3">{props.description}</div>
            </div>
            <div className="ShowApp">{props.ShowApp}</div>
        </div>
    );
    let toLeft = (
        <div className="flex flex-col px-16 sm:flex-row">
            <div className="ShowApp">{props.ShowApp}</div>
            <div className="app-text">
                <div className="text-sky-500 font-semibold text-5xl">{props.title}</div>
                <div className="text-white p-3">{props.description}</div>
            </div>
        </div>
    );
    const isToRight = props.toRight;
    return (<div>{isToRight ? toRight : toLeft}</div>);
};