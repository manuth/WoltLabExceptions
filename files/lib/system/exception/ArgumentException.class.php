<?php
    /**
     * @author Manuel Thalmann <m@nuth.ch>
     * @license Apache-2.0
     *
     * @copyright © Manuel Thalmann 2018
     */
    namespace wcf\system\exception;
    {
        /**
         * The exception that is thrown when one of the arguments provided to a method is not valid.
         */
        class ArgumentException extends Exception
        {
            /**
             * The name of the parameter that is invalid.
             *
             * @var string
             */
            private $paramName;

            /**
             * Initializes a new instance of the `ArgumentException` class.
             * 
             * @param string $paramName
             * The name of the parameter that is invalid.
             * 
             * @param string $message
             * The message that describes the error.
             */
            public function __construct($paramName, $message = null, $innerException = null)
            {
                parent::__construct($message, $innerException);
                $this->paramName = $paramName;
            }

            /**
             * Gets the name of the parameter that is invalid.
             *
             * @return string
             */
            public function getParamName()
            {
                return $this->paramName;
            }
        }
    }
?>