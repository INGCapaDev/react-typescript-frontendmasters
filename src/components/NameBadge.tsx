type NameBadgeProps = {
  name: string;
};

const NameBadge: React.FC<NameBadgeProps> = ({ name }): JSX.Element => {
  return (
    <section>
      <header className='badge-header'>
        <h1 className='text-5xl'>HELLO</h1>
        <p>My name is...</p>
      </header>
      <div className='badge-body'>
        <p className='badge-name'>{name}</p>
      </div>
      <footer className='badge-footer'></footer>
    </section>
  );
};
export default NameBadge;
