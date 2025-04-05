import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div>
      <div>Layout</div>
      <div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
