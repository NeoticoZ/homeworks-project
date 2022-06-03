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

interface INotificationButtonProps {
  seemed?: boolean;
}

export const NotificationButton = ({ seemed }: INotificationButtonProps) => {
  const [notifications, setNotifications] = useState("0");
  const [isSeemed, setIsSeemed] = useState(false);

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
        <Container
          className={seemed || notifications === "0" ? "dont-show" : ""}
          notificationsAmount={notifications}
        >
          <NotificationIcon />
        </Container>
      </a>
    </Link>
  );
};
