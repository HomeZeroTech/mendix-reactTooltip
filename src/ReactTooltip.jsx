import { Component, createElement } from "react";

import { TooltipUI } from "./components/TooltipUI";

export default class ReactTooltip extends Component {
    tooltipId = Math.random().toString(36).substring(2, 9);

    render() {
        const {
            class: className,
            style,
            toolTipTrigger,

            toolTipText,
            toolTipPosition,
            toolTipEffect,
            triggerType,
            delayShow,
            delayHide,
            toolTipStyle,
            enableBorder,
            arrowColor
        } = this.props;

        return (
            <TooltipUI
                toolTipId={this.tooltipId}
                toolTipText={toolTipText.status === "available" ? toolTipText.value : ""}
                toolTipPosition={toolTipPosition}
                toolTipEffect={toolTipEffect}
                toolTipStyle={toolTipStyle}
                triggerType={triggerType}
                delayShow={delayShow}
                delayHide={delayHide}
                enableBorder={enableBorder}
                arrowColor={arrowColor}
                className={className}
                style={style}
            >
                {toolTipTrigger}
            </TooltipUI>
        );
    }
}
