import { NextPage } from "next";
import { Accordion } from "../components/Accordion";
import { NotificationButton } from "../components/NotificationButton";
import { setupAPIClient } from "../services/api";
import {
  AccordionsWrapper,
  Container,
  Wrapper,
} from "../styles/pages/notifications";
import { withSSRAuth } from "../utils/withSSRAuth";

interface INotification {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

interface INotifications {
  notifications: INotification[];
}

const Notifications: NextPage<INotifications> = ({ notifications }) => {
  return (
    <Container>
      <Wrapper>
        <h2 className="title">Avisos</h2>

        <AccordionsWrapper>
          {notifications.map((notification) => (
            <Accordion key={notification.id} title={notification.title}>
              {notification.description}
            </Accordion>
          ))}
        </AccordionsWrapper>
      </Wrapper>

      <NotificationButton />
    </Container>
  );
};

export const getServerSideProps = withSSRAuth(async (ctx: any) => {
  const apiClient = setupAPIClient(ctx);
  const notifications = await apiClient.get("/notifications");

  const date = new Date();
  const actualDate = date.getDate();

  const notificationsFiltered = notifications.data.filter(
    (notification: INotification) => {
      const notificationDate = new Date(notification.createdAt).getDate();

      return notificationDate === actualDate;
    }
  );

  return {
    props: { notifications: notificationsFiltered },
  };
});

export default Notifications;
