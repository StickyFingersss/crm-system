import { NavigationBar } from '../../components/NavigationBar/NavigationBar';
import { Manager } from '../../components/Manager/Manager';

export const Managers = () => {
  const managersFromDb = [
    { name: 'Ilya', calls: 52 },
    { name: 'MAxim', calls: 26 },
  ];
  return (
    <>
      <h1>Wolfs Team</h1>
      <NavigationBar />
      {managersFromDb.map((el, i) => {
        return <Manager key={i} name={el.name} calls={el.calls} />;
      })}
    </>
  );
};
