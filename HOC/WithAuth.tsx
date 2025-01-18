import React, { memo, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@/shared/redux/store";
import LayoutWrapper from "@/shared/layout-components/LayoutWrapper";
import { LoadingComponent } from "@/components/Loading";

interface WithAuthProps {
  requiredRole?: "user" | "partner";
  redirectIfNotAuth?: string;
  layout?: string;
}

const withAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  options: WithAuthProps = {}
) => {
  const { requiredRole, redirectIfNotAuth = "/", layout } = options;

  const ComponentWithAuth = memo((props: P) => {
    const router = useRouter();
    const { isAuthenticated, user } = useSelector(
      (state: RootState) => state.auth
    );
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
      setHasMounted(true);
    }, []);

    useEffect(() => {
      if (!hasMounted) return;
      if (!isAuthenticated && requiredRole) {
        router.replace(redirectIfNotAuth);
      } else if (
        isAuthenticated &&
        (router.pathname === "/" || router.pathname === "/sign-up")
      ) {
        router.replace("/");
      } else if (
        isAuthenticated &&
        requiredRole &&
        user?.role !== requiredRole
      ) {
        router.replace("/505");
      }
    }, [isAuthenticated, requiredRole, user?.role, hasMounted]);

    if (!hasMounted) {
      return <LoadingComponent />;
    }

    return (
      <LayoutWrapper layout={layout}>
        <WrappedComponent {...props} />
      </LayoutWrapper>
    );
  });

  return ComponentWithAuth;
};

export default withAuth;
