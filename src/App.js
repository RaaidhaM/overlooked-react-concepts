import './App.css'
import ErrorBoundary from './ErrorBoundaries/ErrorBoundary'
import MyComponent from './ErrorBoundaries/MyComponent'
import ValueUpdater from './HigherOrderComponents/ValueUpdater'
import MemoDemo from './Memo/MemoDemo'
import Modal from './Portals/PortalsDemo'
import CustomInputParent from './Refs/CustomInputParent'
import FocusInput from './Refs/FocusInput'
import ClickCounter from './RenderProps/ClickCounter'
import Counter from './RenderProps/Counter'

function App() {
  return (
    <div className="App">
      {/* Portals Example: Uncomment below line to view */}
      {/* <Modal isOpen={true} onClose={() => console.log('Close')}/> */}

      {/* Higher Order Components Example: Uncomment below line to view */}
      {/* <ValueUpdater name="Logger Demo"/> */}

      {/* Refs Example: Uncomment below lines to view */}
      {/* <FocusInput /> */}
      {/* <CustomInputParent /> */}

      {/* Memo Example: Uncomment below line to view */}
      {/* <MemoDemo value={10} /> */}

      {/* Error Boundaries Example: Uncomment below lines to view */}
      {/* <ErrorBoundary>
        <MyComponent cName="Sample" />
      </ErrorBoundary> */}

      {/* Render Props Example: Uncomment below lines to view */}
      {/* <Counter>
        {(count, incrementCount) => (
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      </Counter> */}
    </div>
  )
}

export default App
