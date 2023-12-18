import { CheckCircle2, XCircle } from "lucide-react"

import { Button } from "@/registry/default/ui/button"
import {
  Stepper,
  StepperConfig,
  StepperItem,
} from "@/registry/default/ui/stepper"
import { useStepper } from "@/registry/default/ui/use-stepper"

const steps = [
  { label: "Step 1" },
  { label: "Step 2" },
  { label: "Step 3" },
] satisfies StepperConfig[]

export default function StepperCustomSuccessErrorIcon() {
  const {
    nextStep,
    prevStep,
    resetSteps,
    activeStep,
    isDisabledStep,
    isLastStep,
    isOptionalStep,
  } = useStepper({
    initialStep: 0,
    steps,
  })

  return (
    <div className="flex w-full flex-col gap-4">
      <Stepper
        activeStep={activeStep}
        successIcon={<CheckCircle2 />}
        errorIcon={<XCircle />}
      >
        {steps.map((step, index) => (
          <StepperItem index={index} key={index} {...step}>
            <div className="h-40 w-full rounded-lg bg-slate-100 p-4 text-slate-900 dark:bg-slate-300">
              <p>Step {index + 1} content</p>
            </div>
          </StepperItem>
        ))}
      </Stepper>
      <div className="flex items-center justify-end gap-2">
        {activeStep === steps.length ? (
          <>
            <h2>All steps completed!</h2>
            <Button onClick={resetSteps}>Reset</Button>
          </>
        ) : (
          <>
            <Button disabled={isDisabledStep} onClick={prevStep}>
              Prev
            </Button>
            <Button onClick={nextStep}>
              {isLastStep ? "Finish" : isOptionalStep ? "Skip" : "Next"}
            </Button>
          </>
        )}
      </div>
    </div>
  )
}