import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import Box from '../Box/Box';
import StepperM from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '../Button/Button';
import Typography from '../Typography/Typography';
/**
 * @uxpindocurl https://mui.com/components/steppers/#main-content
 */
function Stepper(props) {
    const steps = [
        {
            label: 'Select campaign settings',
        },
        {
            label: 'Create an ad group',
        },
        {
            label: 'Create an ad',
        },
    ];
    const [activeStep, setActiveStep] = React.useState(props.activeStep);
    const [skipped, setSkipped] = React.useState(new Set());
    const isStepOptional = (step) => {
        return step === 1;
    };
    const isStepSkipped = (step) => {
        return skipped.has(step);
    };
    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };
    const handleReset = () => {
        setActiveStep(0);
    };
    return (_jsxs(Box, { sx: { width: '100%' }, children: [_jsx(StepperM, { ...props, activeStep: activeStep, orientation: props.orientation, alternativeLabel: props.orientation === 'horizontal' ? props.alternativeLabel : null, nonLinear: props.nonLinear, children: steps.map((step, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    if (isStepOptional(index)) {
                        labelProps.optional = _jsx(Typography, { variant: "caption", children: "Optional" });
                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (_jsx(Step, { ...stepProps, children: _jsx(StepLabel, { ...labelProps, children: step.label }) }, step.label));
                }) }), activeStep === steps.length ? (_jsxs(React.Fragment, { children: [_jsx(Typography, { sx: { mt: 2, mb: 1 }, children: "All steps completed - you're finished" }), _jsxs(Box, { sx: { display: 'flex', flexDirection: 'row', pt: 2 }, children: [_jsx(Box, { sx: { flex: '1 1 auto' }, children: " " }), _jsx(Button, { onClick: handleReset, children: "Reset" })] })] })) : (_jsxs(React.Fragment, { children: [_jsxs(Typography, { sx: { mt: 2, mb: 1 }, children: ["Step ", activeStep + 1] }), _jsxs(Box, { sx: { display: 'flex', flexDirection: 'row', pt: 2 }, children: [_jsx(Button, { color: "inherit", disabled: activeStep === 0, onClick: handleBack, sx: { mr: 1 }, children: "Back" }), _jsx(Box, { sx: { flex: '1 1 auto' }, children: " " }), isStepOptional(activeStep) && (_jsx(Button, { color: "inherit", onClick: handleSkip, sx: { mr: 1 }, children: "Skip" })), _jsx(Button, { onClick: handleNext, children: activeStep === steps.length - 1 ? 'Finish' : 'Next' })] })] }))] }));
}
Stepper.propTypes = {
    /**
     *  Two or more <Step /> components.
     */
    /** @uxpinignoreprop */
    children: PropTypes.node,
    /**
     * Set the active step (zero based index). Set to -1 to disable all the steps.
     */
    activeStep: PropTypes.number,
    /**
     * The component orientation (layout flow direction).
     */
    orientation: PropTypes.oneOf(['horizontal', 'vertical']),
    /**
     * If set to 'true' and orientation is horizontal, then the step label will be positioned under the icon.
     */
    /** @uxpinpropname label position */
    alternativeLabel: PropTypes.bool,
    /**
     * If set the Stepper will not assist in controlling steps for linear flow.
     */
    /** @uxpinignoreprop */
    nonLinear: PropTypes.bool,
    /**
     * Override or extend the styles applied to the component. See CSS API for more details.
     * https://mui.com/api/stepper/#css
     */
    /** @uxpinignoreprop */
    classes: PropTypes.object,
    /**
     * An element to be placed between each step.
     */
    /** @uxpinignoreprop */
    connector: PropTypes.element,
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     * See the `sx` https://mui.com/system/the-sx-prop/ page for more details.
     */
    sx: PropTypes.object,
};
export default Stepper;
//# sourceMappingURL=Stepper.js.map