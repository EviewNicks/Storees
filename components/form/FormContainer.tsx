"use client";

import { useFormState } from "react-dom";
import { ReactNode, useCallback, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { actionFunction } from "@/utils/types";

const initialState = {
  message: "",
};

const FormContainer = ({
  action,
  children,
}: {
  action: actionFunction;
  children: ReactNode;
}) => {
  const [state, formAction] = useFormState(action, initialState);
  const { toast } = useToast();

  const showToast = useCallback(() => {
    if (state.message) {
      toast({ description: state.message });
    }
  }, [state.message, toast]);

  useEffect(() => {
    showToast();
  }, [showToast]);

  return <form action={formAction}>{children}</form>;
};

export default FormContainer;
