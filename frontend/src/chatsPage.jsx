import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
    return (
        <div style={{ height: "100vh", width: "100vw" }}>
            <PrettyChatWindow
                projectId="a4e1f4a2-1386-43b9-a4d0-5923018d7e94"
                username={props.user.username} // adam
                secret={props.user.secret} // pass1234
                style={{ height: "100%" }}
            />
        </div>
    );
};

export default ChatsPage;