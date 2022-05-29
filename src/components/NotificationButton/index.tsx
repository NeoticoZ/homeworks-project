import Link from "next/link";
import { useEffect, useState } from "react";
import { api } from "../../services/apiClient";
import { Container, NotificationIcon } from "./styles";

interface INotification {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export const NotificationButton = () => {
  const [notifications, setNotifications] = useState("");

  const date = new Date();

  useEffect(() => {
    (async () => {
      await api.get("/notifications").then((response) => {
        const actualDate = date.getDate();

        const filteredNotifications = response.data.filter(
          (notification: INotification) => {
            const notificationDate = new Date(notification.createdAt).getDate();

            return notificationDate === actualDate;
          }
        );

        setNotifications(filteredNotifications.length.toString());
      });
    })();
  }, []);

  return (
    <Link href="/notifications">
      <a>
        <Container notificationsAmount={notifications}>
          <NotificationIcon />
        </Container>
      </a>
    </Link>
  );
};
