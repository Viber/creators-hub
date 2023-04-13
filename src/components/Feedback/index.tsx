import React, { useEffect, useState } from "react";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import styles from "./styles.module.scss";

const VotedYes = () => {
    return <span>Thanks for your feedback. We are glad you like it :)</span>;
};

const VotedNo = () => {
    return <span>Thanks for your feedback. We will try to improve :(</span>;
};

export default function Feedback({resource}) {
    const [reaction, setReaction] = useState(null);

    const isReacted = reaction === "Yes" || reaction === "No";
    const _resource = String(resource).replace(/\//g, "-");

    const handleReaction = (params) => {
        setReaction(params.icon);
    };

    useEffect(() => {
        if (ExecutionEnvironment.canUseDOM) {
            window.HappyReact.init({
                onReaction: handleReaction,
            });
        }
    }, []);

    return (
        <div className={styles.widget}>
            <div className={styles.root}>
                <h3 className={styles.title}>Was this page helpful? </h3>
                {!isReacted ? (
                    <div
                        data-hr-strategy="instant"
                        data-hr-token="87996e73-b495-4234-b98a-ca6834e9126a"
                        data-hr-styles={JSON.stringify({
                            container: styles.container,
                            grid: styles.grid,
                            cell: styles.cell,
                            reaction: styles.reaction,
                            reactionIcon: styles.reactionIcon,
                            footer: styles.footer,
                        })}
                        data-hr-resource={_resource}
                    />
                ) : reaction === "Yes" ? (
                    <VotedYes/>
                ) : (
                    <VotedNo/>
                )}
            </div>
        </div>
    );
}
